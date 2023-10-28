import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createCity } from "@/graphql/mutations";
import { getCity, getCityByName } from "@/graphql/queries";
import { City } from "@/API";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name is required.",
  }),
});

export const AddCityModal: React.FC = ({}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const clearErrorMessage = () => {
    setError("");
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });
  const handleVerifyEmail = async (data: any) => {
    clearErrorMessage();
  };

  const handleAddCity = async (data: any) => {
    clearErrorMessage();

    if (!selectedImage) {
      setError("Image is required.");
      return;
    }

    try {
      const cityName = form.getValues("name").toLowerCase();
      const checkNameResult = (await API.graphql(
        graphqlOperation(getCityByName, { name: cityName })
      )) as { data: { listCities: { items: City[] } } };

      if (checkNameResult.data.listCities.items.length !== 0) {
        throw new Error(
          `Sorry, r/${checkNameResult.data.listCities.items[0].name} is taken. Try another.`
        );
      }
      // Upload image to S3
      const result = await Storage.put(
        selectedImage.name.toLowerCase(),
        selectedImage,
        {
          contentType: "image/png", // or adjust as needed
        }
      );

      const imageUrl = result.key;

      // Add city to DynamoDB
      const cityData = {
        name: data.name,
        imageUrl: imageUrl,
      };
      await API.graphql(graphqlOperation(createCity, { input: cityData }));
    } catch (error: any) {
      setError(error.message);
      console.error("Error uploading data:", error);
    }
  };
  return (
    <DialogContent className="p-0 overflow-hidden">
      <DialogHeader className="pt-8 px-6">
        <DialogTitle className="text-2xl text-center font-bold">
          Add City
        </DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleAddCity)} className="space-y-8">
          <div className="space-y-8 px-6">
            <div className="flex flex-col space-y-4 items-center justify-center text-center">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="flex justify-start px-3 capitalize text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      City Name
                    </FormLabel>
                    <FormControl>
                      <div className="flex justify-between">
                        <Input
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="city name..."
                          {...field}
                          onChange={(e) => {
                            clearErrorMessage();
                            field.onChange(e);
                          }}
                        />
                        <Button variant="ghost" type="button"></Button>
                      </div>
                    </FormControl>
                    <FormMessage className="flex justify-start px-3" />
                    <div className="flex justify-start px-3 text-red-500">
                      {error}
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="flex justify-start px-3 capitalize text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      City Image
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        onChange={(e) => {
                          clearErrorMessage();
                          // Store the selected file for later use
                          if (e.target.files && e.target.files.length > 0) {
                            setSelectedImage(e.target.files[0]);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage className="flex justify-start px-3" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <DialogFooter className="flex  flex-col  px-6 py-4">
            <Button variant="default">Create</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

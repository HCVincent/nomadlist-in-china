import { NextResponse } from "next/server";
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '@/graphql/queries';
import { GraphQLResult } from "@aws-amplify/api";

interface User {
    id: string;
    email: string;
    // ... other fields
}

interface ListUsersData {
    listUsers: {
        items: User[];
        // ... other fields you expect to get back
    };
}
// complete this
export async function GET() {
    let usersData: GraphQLResult<ListUsersData> | undefined;
    try {
        usersData = await API.graphql(graphqlOperation(listUsers)) as GraphQLResult<ListUsersData>;
        console.log(usersData);
    } catch (error) {
        console.log('Error fetching users:', error);
    }
    // Check if there's user data and return it, otherwise return a placeholder response
    if (usersData?.data?.listUsers) {
        return new NextResponse(JSON.stringify(usersData.data.listUsers.items), { status: 200 });
    } else {
        return new NextResponse("Failed to fetch users", { status: 500 });
    }
}

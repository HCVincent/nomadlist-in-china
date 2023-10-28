type User = {
  id: string;
  email: string;
  // ... other fields
};

type ListUsersData = {
  listUsers: {
    items: User[];
    // ... other fields you expect to get back
  };
};

import UserDetailsContent from "./user-details-content";

interface UserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  return <UserDetailsContent id={id} />;
}

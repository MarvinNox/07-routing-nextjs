import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};
export const revalidate = 5;

export default async function Notes({ params }: Props) {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  return <NotesClient category={category} />;
}

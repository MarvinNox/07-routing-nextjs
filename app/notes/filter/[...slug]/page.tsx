import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Notes({ params }: Props) {
  const { slug } = await params;
  const queryClient = new QueryClient();
  const category = slug[0] === "all" ? undefined : slug[0];
  const data = await fetchNotes({ page: 1, search: "", tag: category });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialData={data} category={category} />
    </HydrationBoundary>
  );
}

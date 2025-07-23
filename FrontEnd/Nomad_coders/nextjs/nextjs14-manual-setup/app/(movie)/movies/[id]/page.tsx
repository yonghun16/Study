export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>movie {id}</h1>
}

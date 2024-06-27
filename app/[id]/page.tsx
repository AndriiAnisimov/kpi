export default function AllIdPage({ params }: { params: { id: string }}) {
  return (
    <>
      <p>{params.id}</p>
    </>
  )
}

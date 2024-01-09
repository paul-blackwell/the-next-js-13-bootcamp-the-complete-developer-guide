import SearchBar from '../../components/SearchBar';

export default function Header({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <SearchBar searchParams={searchParams} />
    </div>
  );
}

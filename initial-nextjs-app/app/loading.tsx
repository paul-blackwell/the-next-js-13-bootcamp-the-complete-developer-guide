import Header from './components/Header';

export default function Loading() {
  const loadingCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {loadingCards.map((card) => (
          <div
            key={card}
            className="animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
          />
        ))}
      </div>
    </main>
  );
}

export default function Hero() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center w-full max-w-7xl mx-auto gap-16 max-h-[1024px] h-screen">
        <div className="flex items-center">
          <h1 className="text-9xl text-primary-600 font-thin">{"{"}</h1>
          <h1 className="text-5xl text-primary-400 font-medium pt-4">developer: </h1>
          <h1 className="text-5xl text-primary-50 font-medium pt-4">Aldair Garros</h1>
          <h1 className="text-9xl text-primary-600 font-thin">{"},"}</h1>
        </div>
        <div className="flex items-center">
          <p className="text-8xl font-thin text-primary-700">{"{"}</p>
          <div className="flex max-w-lg gap-4 pt-4">
            <p className="flex-none text-primary-400">intro:</p>
            <p className="text-primary-50">
              “A <span className="text-secondary-500">Fullstack Developer</span> specialized in Web and Mobile
              Development, Javascript, API, Responsive Web Design and UI/UX.“
            </p>
          </div>
          <p className="text-8xl font-thin text-primary-700">{"},"}</p>
        </div>
      </div>
    </div>
  );
}

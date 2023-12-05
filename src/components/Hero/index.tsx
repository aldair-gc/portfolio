import { Container } from "../Container";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center w-full max-w-7xl mx-auto gap-16 max-h-[1024px] h-screen px-4">
        <h1 className="flex flex-col sm:flex-row">
          <span className="text-3xl sm:text-5xl text-primary-600 dark:text-primary-400">developer:&nbsp;</span>
          <span className="text-3xl sm:text-5xl text-primary-900 dark:text-primary-50 font-medium">
            <span className="text-3xl sm:text-5xl text-primary-600 dark:text-primary-400">&quot;</span>
            Aldair Garros
            <span className="text-3xl sm:text-5xl text-primary-600 dark:text-primary-400">&quot;</span>
          </span>
        </h1>
        <Container closing="curlyBrace" background={false} shadow={false}>
          <p className="flex flex-col sm:flex-row max-w-lg">
            <span className="flex-none text-primary-600 dark:text-primary-400">intro:&nbsp;</span>
            <span className="text-primary-800 dark:text-primary-50 pl-4 sm:pl-0">
              “A <span className="text-secondary-600 dark:text-secondary-500">Fullstack Developer</span> specialized in
              Web and Mobile Development, Javascript, API, Responsive Web Design and UI/UX.“
            </span>
          </p>
        </Container>
      </div>
    </div>
  );
}

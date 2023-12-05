interface Props {
  text: string;
}

export default function TextBox({ text }: Props): JSX.Element {
  return (
    <div className="w-96 h-96 max-w-full bg-primary-50 dark:bg-primary-800 p-4 text-3xl">
      <p className="text-secondary-600 dark:text-secondary-500">{">"}</p>
      <p className="text-secondary-600 dark:text-secondary-500">
        {text}
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <div className="my-4 flex w-full items-center justify-center text-sm">
      <p>
        <Link
          href="https://github.com/aryanprince"
          className="underline underline-offset-4"
        >
          Aryan
        </Link>
      </p>
    </div>
  );
}

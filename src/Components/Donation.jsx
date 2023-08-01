export default function Donation({ donation }) {
  const { name, amount, caption } = donation;

  return (
    <li>
      <span>
        {" "}
        {name} donated $ {amount}
      </span>
      {caption}
    </li>
  );
}

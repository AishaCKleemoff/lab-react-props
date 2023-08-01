function Progress(props) {
  const { targetAmount, amountTotal } = props;

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${amountTotal}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
export default Progress;

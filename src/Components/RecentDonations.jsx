function RecentDonations(props) {
  const { listDonations } = props;

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{listDonations}</ul>
    </section>
  );
}
export default RecentDonations;

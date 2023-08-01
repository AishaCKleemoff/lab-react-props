import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import "./App.css";
import Donation from "./Components/Donation";

const targetAmount = 20000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 305,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

const amountTotal = donations.reduce((acc, cur) => acc + cur.amount, 0);
console.log(amountTotal);

const donationsNumber = donations.length;
console.log(donationsNumber);

const listDonations = donations.map((donation) => {
  return <Donation key={donation.id} donation={donation} />;
});

//console.log(listDonations);
function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <RecentDonations listDonations={listDonations} />
        </section>
        <section className="">
          <Progress targetAmount={targetAmount} amountTotal={amountTotal} />
          <DonationForm donationsNumber={donationsNumber} />
        </section>
      </main>
    </>
  );
}

export default App;

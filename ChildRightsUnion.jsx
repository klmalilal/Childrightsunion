
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const tabs = [
  "Administration",
  "Union Structure",
  "Orders",
  "Upcoming Meetings",
  "Contact Us",
  "Register Member",
];

const credentials = {
  username: "unionmember",
  password: "secure2025",
};

export default function ChildRightsUnion() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [activeTab, setActiveTab] = useState("Administration");

  const handleLogin = () => {
    if (user === credentials.username && pass === credentials.password) {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Administration":
        return <p className="text-pink-800 font-medium">Details about the administration of the union.</p>;
      case "Union Structure":
        return <p className="text-indigo-800 font-medium">Hierarchy and members of the union.</p>;
      case "Orders":
        return <p className="text-green-700 font-medium">Latest orders and circulars related to child rights department.</p>;
      case "Upcoming Meetings":
        return <p className="text-orange-700 font-medium">Schedule of upcoming meetings and events.</p>;
      case "Contact Us":
        return <p className="text-blue-700 font-medium">Email: union.childrights@rajasthan.gov.in | Phone: 0141-XXXXXXX</p>;
      case "Register Member":
        return (
          <form className="grid gap-2 bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 p-4 rounded-xl shadow">
            <Input placeholder="Full Name" className="bg-white" />
            <Input placeholder="Email" className="bg-white" />
            <Input placeholder="Mobile Number" className="bg-white" />
            <Input placeholder="Employee ID" className="bg-white" />
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Submit Registration</Button>
          </form>
        );
      default:
        return null;
    }
  };

  if (!loggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 via-pink-200 to-yellow-100">
        <Card className="p-6 w-full max-w-sm bg-white shadow-xl rounded-2xl">
          <CardContent className="grid gap-4">
            <h2 className="text-2xl font-bold text-center text-purple-800">Union Login</h2>
            <Input
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="bg-white"
            />
            <Input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="bg-white"
            />
            <Button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
              onClick={handleLogin}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gradient-to-tr from-yellow-50 via-pink-50 to-blue-50 min-h-screen">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-purple-900 drop-shadow-md">
          Union of Child Rights Department<br />
          <span className="text-blue-800">Rajasthan, Jaipur</span>
        </h1>
      </header>
      <nav className="flex flex-wrap gap-3 justify-center mb-6">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={tab === activeTab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full font-semibold ${tab === activeTab ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'border-purple-300 text-purple-700'}`}
          >
            {tab}
          </Button>
        ))}
      </nav>
      <main className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {renderTabContent()}
      </main>
    </div>
  );
}

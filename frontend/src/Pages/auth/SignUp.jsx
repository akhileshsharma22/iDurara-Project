import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later we’ll send this to backend
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

        <div className="space-y-3">
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {/* Country Dropdown */}
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
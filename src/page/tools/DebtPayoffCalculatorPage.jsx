import { useState } from "react";

export default function DebtPayoffCalculatorPage({ onSubmit }) {
  const [debts, setDebts] = useState([
    { name: "", balance: "", minPayment: "", interestRate: "" },
  ]);
  const [oneTimeExtra, setOneTimeExtra] = useState("");
  const [monthlyExtra, setMonthlyExtra] = useState("");
  const [method, setMethod] = useState("snowball");

  const handleDebtChange = (index, field, value) => {
    const newDebts = [...debts];
    newDebts[index][field] = value;
    setDebts(newDebts);
  };

  const addDebt = () => {
    setDebts([...debts, { name: "", balance: "", minPayment: "", interestRate: "" }]);
  };

  const removeDebt = (index) => {
    const newDebts = debts.filter((_, i) => i !== index);
    setDebts(newDebts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDebts = debts.map((debt) => ({
      ...debt,
      balance: parseFloat(debt.balance),
      minPayment: parseFloat(debt.minPayment),
      interestRate: parseFloat(debt.interestRate),
    }));
    onSubmit({
      debts: formattedDebts,
      oneTimeExtra: parseFloat(oneTimeExtra),
      monthlyExtra: parseFloat(monthlyExtra),
      method,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-bold">Enter Your Debts</h2>
      {debts.map((debt, index) => (
        <div key={index} className="grid grid-cols-5 gap-2 items-end">
          <input
            type="text"
            placeholder="Debt Name"
            value={debt.name}
            onChange={(e) => handleDebtChange(index, "name", e.target.value)}
            className="border p-2"
          />
          <input
            type="number"
            placeholder="Balance"
            value={debt.balance}
            onChange={(e) => handleDebtChange(index, "balance", e.target.value)}
            className="border p-2"
          />
          <input
            type="number"
            placeholder="Min Payment"
            value={debt.minPayment}
            onChange={(e) => handleDebtChange(index, "minPayment", e.target.value)}
            className="border p-2"
          />
          <input
            type="number"
            placeholder="Interest Rate (%)"
            value={debt.interestRate}
            onChange={(e) => handleDebtChange(index, "interestRate", e.target.value)}
            className="border p-2"
          />
          <button
            type="button"
            onClick={() => removeDebt(index)}
            className="text-red-600 underline"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addDebt}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Debt
      </button>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="One-Time Extra Payment"
          value={oneTimeExtra}
          onChange={(e) => setOneTimeExtra(e.target.value)}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Monthly Extra Payment"
          value={monthlyExtra}
          onChange={(e) => setMonthlyExtra(e.target.value)}
          className="border p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Payoff Method</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="border p-2"
        >
          <option value="snowball">Snowball (lowest balance first)</option>
          <option value="avalanche">Avalanche (highest interest first)</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Calculate
      </button>
    </form>
  );
}

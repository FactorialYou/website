import { useState } from "react";
import { Container } from "react-bootstrap";
import DebtPayoffForm from "./DebtPayoffForm";
import DebtPayoffSummary from "./DebtPayoffSummary";

export default function DebtPayoffCalculator() {

  const [method, setMethod] = useState()
  const [bauSchedule, setBauSchedule] = useState([]);
  const [acceleratedSchedule, setAccelerateSchedule] = useState([]);

  const calculateDebtPayoff = (debts, monthlyExtra, oneTimeExtra, method) => {

    // Deep copy debts to avoid mutating state
    let debtList = debts.map(debt => ({
      ...debt,
      totalPaid: 0,
      totalInterest: 0
    }));

    let month = 0;
    const schedule = [];
    const MONTLY_BUDGET = debtList.reduce((sum, d) => sum + d.minPayment, 0) + monthlyExtra;

    // Sort debts
    debtList = debtList.sort((a, b) => {
      if (method === "snowball") return a.balance - b.balance;
      if (method === "avalanche") return b.interestRate - a.interestRate;
      return 0;
    });

    // Apply One time payment
    let oneTimeExtraPayment = oneTimeExtra;
    for (let debt of debtList) {

      if (oneTimeExtraPayment <= 0) break;
      if (debt.balance <= 0) continue;

      let applied = Math.min(oneTimeExtraPayment, debt.balance);

      debt.balance -= applied;
      debt.totalPaid += applied;
      oneTimeExtraPayment -= applied;
      
    }

    schedule.push({
      month, 
      debts: debtList.map(debt => Object.assign({}, debt))
    });

    // Apply method monthly
    
    while (debtList.some(d => d.balance > 0)) {
      
      let monthlyBudget = MONTLY_BUDGET;
      month++;

      // Accrue interest for all active debts
      for (let debt of debtList) {

        if (debt.balance <= 0) continue;

        const monthlyInterest = (debt.interestRate / 100 / 12) * debt.balance;
        debt.balance += monthlyInterest;
        debt.totalInterest += monthlyInterest;

      }

      // Make minimum payments on all debts
      for (let debt of debtList) {
        
        if (debt.balance <= 0) continue;

        const applied = Math.min(debt.balance, debt.minPayment);

        debt.balance -= applied;
        debt.totalPaid += applied;
        monthlyBudget -= applied;

      }

      // Apply remaining monthly budget
      for (let debt of debtList) {

        if (monthlyBudget <= 0) break;
        if (debt.balance <= 0) continue;

        const applied = Math.min(debt.balance, monthlyBudget);

        debt.balance -= applied;
        debt.totalPaid += applied;
        monthlyBudget -= applied;

      }

      schedule.push({
        month, 
        debts: debtList.map(debt => Object.assign({}, debt))
      });

      // Prevent infinite loops due to rounding
      if (month > 600) break;

    }

    return schedule

  };

  const handleFormSubmit = (data) => {

    const {debts, monthlyExtra, oneTimeExtra, method} = data

    console.log(data)

    setBauSchedule(calculateDebtPayoff(debts, 0, 0, method))
    setAccelerateSchedule(calculateDebtPayoff(debts, monthlyExtra, oneTimeExtra, method))
    setMethod(method)
  }

  const handleFormClear = () => {
    setBauSchedule([])
    setAccelerateSchedule([])
  }

  return (
    <>

      <DebtPayoffForm onSubmit={handleFormSubmit} onClear={handleFormClear} />

      {acceleratedSchedule.length > 0 && (
        <>
        <h3 className="text-center mt-5 mb-2">Results</h3>
        <DebtPayoffSummary method={method} acceleratedSchedule={acceleratedSchedule} bauSchedule={bauSchedule} />
        </>
      )}

    </>
  );
}

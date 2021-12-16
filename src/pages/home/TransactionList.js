import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionList({ transactions }) {
  const { deleteDocuments } = useFirestore("transactions");

  return (
    <ul className={styles.transactions}>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button onClick={() => deleteDocuments(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

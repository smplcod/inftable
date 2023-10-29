import React from "react";
import styles from "./LabTwoTablesIn3D2.module.css";

const LabTwoTablesIn3D2 = () => {
  return (
    <div className={styles.tablesWrapper}>
      <table className={styles.frontTable}>
        <thead>
          <tr>
            <th>Заголовок 1</th>
            <th>Заголовок 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Данные 1</td>
            <td>Данные 2</td>
          </tr>
        </tbody>
      </table>
      <table className={styles.middleFrontTable}>
        <thead>
          <tr>
            <th>Заголовок C</th>
            <th>Заголовок D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Данные C</td>
            <td>Данные D</td>
          </tr>
        </tbody>
      </table>
      <table className={styles.middleBackTable}>
        <thead>
          <tr>
            <th>Заголовок E</th>
            <th>Заголовок F</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Данные E</td>
            <td>Данные F</td>
          </tr>
        </tbody>
      </table>
      <table className={styles.backTable}>
        <thead>
          <tr>
            <th>Заголовок A</th>
            <th>Заголовок B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Данные A</td>
            <td>Данные B</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LabTwoTablesIn3D2;

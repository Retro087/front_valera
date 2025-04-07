export function getAmount(list) {
  let amount = 0;

  list.map((i) => {
    amount += Number(i.amount);
  });

  return amount;
}

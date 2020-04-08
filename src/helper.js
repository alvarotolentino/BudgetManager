export const reviewBudget = (budget, balance) => {
  let cssClass;
  if (budget / 4 > balance) {
    cssClass = 'alert alert-danger';
  } else if (budget / 2 > balance) {
    cssClass = 'alert alert-warning';
  } else {
    cssClass = 'alert alert-success';
  }
  return cssClass;
};

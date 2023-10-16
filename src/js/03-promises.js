import Notiflix from 'notiflix';
const form = document.querySelector('.form');
console.log(form);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const delay = Number(evt.target.delay.value);
  const step = Number(evt.target.step.value);
  const amount = Number(evt.target.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    Promise.resolve()
      .then(() => {
      return createPromise(i, delay + (i - 1) * step)
      .then((promise) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${promise.position} in ${promise.delay}ms`);
      })
      .catch((error) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
      });
    });
  }

}
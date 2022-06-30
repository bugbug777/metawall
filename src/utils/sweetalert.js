import Swal from 'sweetalert2';

const successAlert = (text, timer = 1000, showConfirmButton = false) => Swal.fire({
  icon: 'success',
  text,
  timer,
  showConfirmButton,
});

const errorAlert = (text = '這是無效的操作！') => {
  Swal.fire({
    icon: 'error',
    text,
  });
};

export {
  successAlert,
  errorAlert,
};

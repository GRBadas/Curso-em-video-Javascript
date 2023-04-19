const selects = document.querySelectorAll('.select');

selects.forEach((select) => {
  select.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    selects.forEach((s) => {
      if (s !== event.target) {
        s.querySelectorAll('option:not(:disabled)').forEach((opt) => {
          if (opt.value === selectedValue) {
            opt.disabled = true;
          } else {
            opt.disabled = false;
          }
        });
      }
    });
  });
});

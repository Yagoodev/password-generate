const controller = [{
    id: "upper",
    selected: true,
    includeUppercase: (str) => {
      console.log(str);
    }
  }, {
    id: "lower",
    selected: false,
    includeLowercase: (str) => {
      console.log(str);
    }
  }
];

function setSelectedOptions() {
  let selected = [];

  const { isUppercase, isLowercase } = controller;

  if (isUppercase.selected) {
    selected.push(isUppercase.id);
  }

  if (isLowercase.selected) {
    selected.push(isLowercase.id);
  }

  return selected;
}

function gerenateNewPassword() {
  const options = setSelectedOptions();

  const selectedOptions = controller.filter(option => {
    console.log()
  });
}
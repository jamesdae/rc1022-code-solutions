function graduate(credential) {
  return function (fullName) {
    console.log(`${fullName}, ${credential}`);
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('James Y');
lawSchool('James Y');

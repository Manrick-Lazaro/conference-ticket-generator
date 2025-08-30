import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("O nome é obrigatório.")
    .max(300, "O nome deve ter no máximo 300 caracteres."),
  email: yup
    .string()
    .required("O e-email é obrigatório")
    .email("Deve ser fornecido um e-mail válido."),
  github: yup.string().required("O user name do github é obrigatório."),
  image: yup
    .mixed<FileList>()
    .test("required", "A imagem é obgrigatória.", (value) => {
      return value && value.length > 0;
    })
    .test("fileSize", "A imagem deve ter no máximo 500KB", (value) => {
      return value && value.length > 0 ? value[0].size <= 500 * 1024 : true;
    })
    .test("fileType", "Apena arquivos JPG ou PNG são permitidos", (value) => {
      return value && value.length > 0
        ? ["image/jpeg", "image/png"].includes(value[0].type)
        : true;
    }),
});

export default schema;

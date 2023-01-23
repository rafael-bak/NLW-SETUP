const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-06","01-07","01-08"],
  taketakePills: ["01-03"],
  journal: ["01-2"],
}
nlwSetup.setData(data)
nlwSetup.load()

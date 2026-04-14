function InputMatricula({matricula, erro, mudaValor}) {
  return (
    <>
    <label htmlFor="matricula">Matricula</label>
    <input className="border rounded-lg" type="number" id="matricula" name="matricula" value={matricula} onChange={mudaValor} />
    <p className="text-red-700">{erro}</p>
    </>
  );
}

export default InputSenha;
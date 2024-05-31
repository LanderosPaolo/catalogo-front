import '../stylesheets/productForm.css'

const NewProduct = () => {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="card">
                <div className="card-body">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Nombre producto" />
                        <label for="floatingInput">Nombre del producto</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Descripción del producto" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Descripción del producto</label>
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile02" />
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Categoría</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>...</option>
                            <option value="1">Resina</option>
                            <option value="2">Plata</option>
                            <option value="3">Oro</option>
                        </select>
                    </div>
                    <div className='text-center'>
                        <button type="button" class="btn btn-primary">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
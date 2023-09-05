import React from 'react'

export default function Modal() {
  return (
    <>
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Sửa thông tin sinh viên</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Tên sinh viên</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" required="" />
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <textarea
                    className="form-control"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input type="text" className="form-control" required="" />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Thoát"
                />
                <input
                  type="submit"
                  className="btn btn-info"
                  defaultValue="Lưu"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Xóa nhân viên</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Bạn chắc chắn muốn xóa sinh viên&lt;ST001&gt;?</p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Hủy"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  defaultValue="Xóa"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

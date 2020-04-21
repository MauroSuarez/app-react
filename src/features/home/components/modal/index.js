import { Modal,Button } from 'antd';
import React from "react";

class ModalProduct extends React.Component {
  render() {
    const { visible ,title,handleOk,handleCancel,btnTextOk} = this.props;
    return (
      <div>
        <Modal
          closable={false}
          title={title}
          visible={visible}
          footer={[
            <Button  onClick={handleCancel}>
              Cancelar
            </Button>,
            <Button type="primary" onClick={handleOk}>
               {btnTextOk}
            </Button>,
          ]}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default ModalProduct;
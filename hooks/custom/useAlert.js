import Swal from 'sweetalert2'

const useAlert = () => {

    const toast = ({
        position, timer, icon, title, showConfirmButton, onClickConfirmButton,
        confirmButtonText, showCancelButton, cancelButtonText,
    }) => {
        const Toast = Swal.mixin({
            toast: true,
            position: position ? position : 'top-end',
            showConfirmButton: showConfirmButton,
            showCancelButton: showCancelButton,
            cancelButtonText: cancelButtonText ? cancelButtonText : 'Cancelar',
            confirmButtonText: confirmButtonText ? confirmButtonText : 'Aceptar',
            timer: timer === undefined ? 3000 : timer,
            timerProgressBar: true,
            didOpen: (e) => {
                e.addEventListener('mouseenter', Swal.stopTimer)
                e.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: icon ? icon : 'success',
            title: title ? title : 'Realizado con exito'
        }).then( async (result) => {
            if (result.isConfirmed) {
                if(onClickConfirmButton){
                    await onClickConfirmButton()
                }
            }
        })
    }


    return { toast }
}

export default useAlert
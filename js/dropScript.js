if (document.querySelector('.drop-zone')) {
    const dropZone = document.querySelector('.drop-zone');
    // для дроп зоны сделай фор ич
    const inputFile = dropZone.querySelector('#inputFile');

    function copyContainer() {
        let cloneContainer = dropZone.querySelector('.drop-zone__name-file');

        if (!cloneContainer.classList.contains('invisibility')) {
            let copyDropZoneNameFile = cloneContainer.cloneNode(true);
            copyDropZoneNameFile.classList.add('invisibility');
            copyDropZoneNameFile.querySelector('#nameFile').textContent = '';
            return copyDropZoneNameFile;
        } else {
            let copyDropZoneNameFile = cloneContainer.cloneNode(true);
            return copyDropZoneNameFile;
        }
    }

    function addEventListener() {
        let dropZoneNameFile = dropZone.querySelectorAll('.drop-zone__name-file');
        dropZoneNameFile.forEach(el => {
            el.querySelector('.delete-btn').addEventListener('click', () => {
                el.remove();
            })
        })
    }

    function handleVisionNameFile() {
        let dropZoneNameFile = dropZone.querySelectorAll('.drop-zone__name-file');
        if (dropZoneNameFile.length < 6) {
            addEventListener();
            dropZoneNameFile.forEach(cont => {
                if (cont.classList.contains('invisibility')) {
                    cont.classList.remove('invisibility');
                }
            })
            addContainer();
        }
    }

    function addContainer() {
        dropZone.appendChild(copyContainer());
    }

    function dropHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    let fileSize = file.size.toString();
                    let dropZoneNameFile = dropZone.querySelectorAll('.drop-zone__name-file');
                    dropZoneNameFile.forEach(cont => {
                        const nameFile = cont.querySelector('#nameFile');
                        if (nameFile.textContent.length === 0) {
                            if (fileSize.length < 7) {
                                if (Math.round(+fileSize / 1024).toFixed(0) == 0) {
                                    nameFile.textContent = file.name.toString() + " (" + fileSize + " б.)"
                                } else {
                                    nameFile.textContent = file.name.toString() + ` (${Math.round(+fileSize / 1024).toFixed(0)} кб.)`
                                }
                            } else {
                                nameFile.textContent = file.name.toString() + ` (${Math.round(+fileSize / 1024).toFixed(0)} мб.)`
                            }
                        }
                    })
                    handleVisionNameFile();
                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((file, i) => {
                let fileSize = file.size.toString();
                let dropZoneNameFile = dropZone.querySelectorAll('.drop-zone__name-file');
                dropZoneNameFile.forEach(cont => {
                    const nameFile = cont.querySelector('#nameFile');
                    if (nameFile.textContent.length === 0) {
                        if (fileSize.length < 7) {
                            if (Math.round(+fileSize / 1024).toFixed(0) == 0) {
                                nameFile.textContent = file.name.toString() + " (" + fileSize + " б.)"
                            } else {
                                nameFile.textContent = file.name.toString() + ` (${Math.round(+fileSize / 1024).toFixed(0)} кб.)`
                            }
                        } else {
                            nameFile.textContent = file.name.toString() + ` (${Math.round(+fileSize / 1024).toFixed(0)} мб.)`
                        }
                    }
                })
                handleVisionNameFile();
            });
        }
    }

    function dragOverHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }

    inputFile.addEventListener('change', () => {
        let fileSize = inputFile.files[0].size.toString();

        let dropZoneNameFile = dropZone.querySelectorAll('.drop-zone__name-file');
        dropZoneNameFile.forEach(cont => {
            const nameFile = cont.querySelector('#nameFile');
            if (nameFile.textContent.length === 0) {
                if (fileSize.length < 7) {
                    if (Math.round(+fileSize / 1024).toFixed(0) == 0) {
                        nameFile.textContent = inputFile.files[0].name.toString() + " (" + fileSize + " б.)"
                    } else {
                        nameFile.textContent = inputFile.files[0].name.toString() + ` (${Math.round(+fileSize / 1024).toFixed(0)} кб.)`
                    }
                } else {
                    nameFile.textContent = inputFile.files[0].name.toString() + ` (${Math.round(+fileSize / 1024).toFixed(0)} мб.)`
                }
            }
        })
        handleVisionNameFile();
    })
}
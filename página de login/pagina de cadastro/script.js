        const form = document.getElementById('registerForm');
        const senha = document.getElementById('senha');
        const confirmInput = document.getElementById('confirm'); 
        const cpf = document.getElementById('cpf');
        const error = document.getElementById('error');

        cpf.addEventListener('input', () => {
            let v = cpf.value.replace(/\D/g, '').slice(0,11);
            if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
            else if (v.length > 3) v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
            cpf.value = v;
        });

        form.addEventListener('submit', (e) => {
            error.hidden = true;
            error.textContent = '';

            if (senha.value !== confirmInput.value) {
                e.preventDefault();
                error.textContent = 'As senhas não coincidem.';
                error.hidden = false;
                senha.focus();
                return;
            }

            const cpfDigits = cpf.value.replace(/\D/g, '');
            if (cpfDigits.length !== 11) {
                e.preventDefault();
                error.textContent = 'CPF inválido. Insira os 11 dígitos.';
                error.hidden = false;
                cpf.focus();
                return;
            }
            e.preventDefault();
            alert('Cadastro realizado (simulação).');
            form.reset();
        });
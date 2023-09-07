function removerProduto(id) {
    if (confirm("Tem certeza de que deseja remover o produto?")) {
      fetch(`/produto/${id}`, {
        method: "DELETE"
      }).then(response => {
        if (response.ok) {
          location.reload(); 
        } else {
          console.error("Erro ao remover produto");
        }
      });
    }
  }

    function mudarStatus(id, statusAtual) {
    const novoStatus = statusAtual === "Disponível" ? "Indisponível" : "Disponível";
    if (confirm(`Tem certeza de que deseja mudar o status para ${novoStatus}?`)) {
      fetch(`/produto/${id}/status`, {
        method: "PUT"
      }).then(response => {
        if (response.ok) {
          location.reload(); 
        } else {
          console.error("Erro ao mudar o status do produto");
        }
      });
    }
  }
using Microsoft.EntityFrameworkCore;
using ClientesApi.Models;

namespace ClientesApi.Data
{
    public class ClientesContext : DbContext
    {
        public ClientesContext(DbContextOptions<ClientesContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
    }
}
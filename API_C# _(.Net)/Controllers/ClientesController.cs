using ClientesApi.Data;
using ClientesApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace ClientesApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly ClientesContext _context;

        public ClientesController(ClientesContext context)
        {
            _context = context;
        }

        // Servicio usando Stored Procedure
        [HttpGet("stored-procedure")]
        public async Task<IActionResult> GetClientesWithStoredProcedure(int pageNumber = 1, int pageSize = 10)
        {
            var clientes = await _context.Clientes
                .FromSqlRaw("EXEC GetClientesPaginados @PageNumber, @PageSize",
                    new SqlParameter("@PageNumber", pageNumber),
                    new SqlParameter("@PageSize", pageSize))
                .ToListAsync();

            return Ok(clientes);
        }

        // Servicio usando Entity Framework LINQ
        [HttpGet("linq")]
        public async Task<IActionResult> GetClientesWithLinq(int pageNumber = 1, int pageSize = 10)
        {
            var clientes = await _context.Clientes
                .OrderBy(c => c.Id)
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            return Ok(clientes);
        }
    }
}
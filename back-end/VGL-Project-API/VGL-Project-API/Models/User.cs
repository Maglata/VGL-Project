namespace VGL_Project_API.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public List<Game> Games { get; set; }
        public int UserID { get; set; }

    }
}

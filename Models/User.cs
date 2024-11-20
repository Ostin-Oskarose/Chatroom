namespace Models
{
    public class User
    {
        public string Email;
        public string Password;
        public string Username;

        public User(string email, string password, string username)
        {
            Email = email;
            Password = password;
            Username = username;
        }
    }
}
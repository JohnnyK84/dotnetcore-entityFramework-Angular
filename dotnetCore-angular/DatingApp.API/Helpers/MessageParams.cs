namespace DatingApp.API.Helpers
{
    public class MessageParams
    {
        private const int MaxPageSize = 30; // Max number a user can set to be displayed on each page
        public int PageNumber { get; set; } = 1;
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }

        // properties to filter by:
        public int UserId { get; set; }
        public string MessageContainer { get; set; } = "Unread";
    }
}
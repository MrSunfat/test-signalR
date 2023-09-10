using Microsoft.AspNetCore.SignalR;
using Notify.API.Hubs.Clients;
using Notify.API.Models;
using Microsoft.AspNetCore.SignalR;

namespace Notify.API.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        //public async Task SendMessage(ChatMessage message)
        //{
        //    await Clients.All.ReceiveMessage(message);
        //}
    }
}

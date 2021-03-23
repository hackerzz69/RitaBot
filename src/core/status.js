// ------------------
// Update Bot Status
// ------------------

module.exports = function(bot, status, config, channel, writable = true)
{
   const statusMap =
   {
      "online": function()
      {
         client.user.setActivity("!t help", {
  type: "STREAMING",
  url: "www.google.com"
})
            }
         };
      },

      "busy": function()
      {
         bot.setPresence({
            status: "dnd"
         });
      },

      "free": function()
      {
         bot.setPresence({
            status: "online"
         });
      }
   };

   //if (status && statusMap.hasOwnProperty(status) && writable)
   if (Object.prototype.hasOwnProperty.call(status && statusMap,status) && writable)
   {
      return statusMap[status]();
   }
};

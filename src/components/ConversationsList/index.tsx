import {
  Box,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { FC } from "react";
import { Conversation } from "../../types/conversation";
import { CONVERSATIONS_API_URL, SHOW_MESSAGES } from "../../utils/constants";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import useFetch from "../../utils/useFetch";
import { Loader } from "../Loader";
import { UserAvatar } from "../UserAvatar";

export const ConversationsList: FC = () => {
  const userId = getLoggedUserId();
  const router = useRouter();
  const [conversations, loading] = useFetch(
    `${CONVERSATIONS_API_URL}${userId}`
  );

  const sortedConversations = conversations?.sort(
    (a: Conversation, b: Conversation) =>
      b.lastMessageTimestamp - a.lastMessageTimestamp
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {sortedConversations.map(
        ({
          id,
          senderId,
          senderNickname,
          lastMessageTimestamp,
          recipientNickname,
        }: Conversation) => (
          <Box key={id}>
            <Tooltip title={SHOW_MESSAGES} placement="left">
              <ListItemButton
                alignItems="flex-start"
                onClick={() =>
                  router.push({
                    pathname: "/messages",
                    query: { conversationId: id },
                  })
                }
              >
                <ListItemAvatar>
                  <UserAvatar userId={senderId} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    senderId === userId ? "de vous" : `de ${senderNickname}`
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`à ${recipientNickname}`}
                      </Typography>
                      {` — ${format(lastMessageTimestamp, "HH:mm")}`}
                    </>
                  }
                />
              </ListItemButton>
            </Tooltip>
            <Divider variant="inset" component="li" />
          </Box>
        )
      )}
    </List>
  );
};

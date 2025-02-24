import { Box, Container } from "@mui/material";
import { Typography } from "../Typography";
import { Event } from "../../models/event";

export type EventDetailContentProps = Pick<Event, "tracks">;

const EventDetailContent: React.FC<EventDetailContentProps> = ({
  tracks,
}: EventDetailContentProps) => {
  if (tracks?.length) {
    return (
      <Box
        data-scroll-wrapper
        sx={{
          padding: "88px 0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          background: "#212236",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <Typography variant="h3" color="contrast">
            Conteúdo
          </Typography>
          {tracks.map((track) => {
            let talksBlock;
            if (track.talks) {
              talksBlock = (
                <Box
                  key={track.name ?? "empty"}
                  sx={{ display: "flex", gap: "36px", flexWrap: "wrap" }}
                >
                  {track.talks.map((talk) => {
                    const talkTimeElement = talk.time ? (
                      <Box>{`${talk.time
                        .getHours()
                        .toString()
                        .padStart(2, "0")}h${talk.time
                        .getMinutes()
                        .toString()
                        .padStart(2, "0")}`}</Box>
                    ) : (
                      <Box>&nbsp;</Box>
                    );
                    return (
                      <Box
                        key={talk.title}
                        sx={{
                          background: `white url("${talk.speaker?.portraitUrl}") no-repeat center center`,
                          backgroundSize: "cover",
                          borderRadius: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            background:
                              "linear-gradient(180.06deg, rgba(33, 34, 54, 0.15) 0.05%, #212236 74.97%)",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "362px",
                            width: "254px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-end",
                              padding: "16px",
                            }}
                          >
                            {talkTimeElement}
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              padding: "16px",
                            }}
                          >
                            <Typography variant="h4" color="gradient_green">
                              {talk.title}
                            </Typography>
                            <Typography variant="h5" color="contrast">
                              {talk.speaker?.name}
                            </Typography>
                            <Typography color="contrast">
                              {talk.speaker?.job}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              );
            }
            return (
              <Container
                key={track.name}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" color="green">
                    {track.name}
                  </Typography>
                  <Box
                    sx={{ flex: 3, height: 0, border: "1px dashed #04FFB4" }}
                  ></Box>
                </Box>
                {talksBlock}
              </Container>
            );
          })}
        </Container>
      </Box>
    );
  }
  return <Box></Box>;
};

export default EventDetailContent;

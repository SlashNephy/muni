import { Card, createStyles, Group, Text } from '@mantine/core'

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image')

  return {
    card: {
      position: 'relative',
      height: 280,
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    author: {
      color: theme.colors.dark[2],
    },
  }
})

export function CardWithImage({
  image,
  title,
  author,
  link,
}: {
  link: string
  image: string
  title: string
  author: string
}): React.ReactElement {
  const { classes, theme } = useStyles()

  return (
    <Card
      className={classes.card}
      component="a"
      href={link}
      p="lg"
      radius="md"
      shadow="lg"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text className={classes.title} size="lg" weight={500}>
            {title}
          </Text>

          <Group position="apart" spacing="xs">
            <Text className={classes.author} size="sm">
              {author}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  )
}

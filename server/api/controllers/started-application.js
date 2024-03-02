// Started application
export const startedApplication = async (_req, res) => {
  try {
    res.status(200).send("Selamat Datang Di Website Islamic Apparel Hub");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};



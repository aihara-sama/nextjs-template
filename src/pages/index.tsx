import { Box } from "@mui/material";
import { Layout } from "components/common/Layout";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { OrganizationJsonLd } from "next-seo";

const Index = () => {
  return (
    <Layout>
      <OrganizationJsonLd
        type="Corporation"
        id="https://app.com"
        logo="https://app.com/static/media/logo.png"
        legalName="App Private Limited"
        name="app"
        address={{
          streetAddress: "xxx",
          addressLocality: "xxx",
          addressRegion: "xxx",
          postalCode: "xxx",
          addressCountry: "<XX>",
        }}
        contactPoint={[
          {
            telephone: "<tel>",
            contactType: "query",
            email: "john@example.com",
            areaServed: "<XX>",
            availableLanguage: ["English"],
          },
        ]}
        sameAs={["https://app.com"]}
        url="https://app.com"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      ></Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default Index;

import {
  reactExtension,
  InlineLayout,
  useSettings,
  Link,
  Text
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => <Extension />);

function Extension() {
  const { terms, privacyPolicyUrl, termsOfConditionsUrl } = useSettings();
  console.log("termss",privacyPolicyUrl, termsOfConditionsUrl)

  const renderTextWithLinks = (text, privacyUrl, termsUrl) => {
    const parts = text.split(/\b(privacy_policy|terms_of_conditions)\b/);
    return parts.map((part, index) => {
      if (part === 'privacy_policy') {
        return (
          <Link external={true} onPress={privacyUrl} key={index} to={privacyUrl}>
            privacy policy
          </Link>
        );
      } else if (part === 'terms_of_conditions') {
        return (
          <Link external={true} onPress={termsUrl} key={index} to={termsUrl}>
            terms of conditions
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <InlineLayout spacing="none">
      <Text>
        {renderTextWithLinks(terms, privacyPolicyUrl, termsOfConditionsUrl)}
      </Text>
    </InlineLayout>
  );
}